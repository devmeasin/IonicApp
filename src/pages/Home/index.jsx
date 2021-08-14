import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonList, IonPage, IonRow, IonText } from '@ionic/react';
import { arrowBackSharp, arrowForwardSharp } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import GirdDesign from '../../components/GirdDesign';
import SkeletonLoader from '../../components/SkeletonLoader';
import NavBar from '../../components/ToolBar';
import './styles.css';


const baseUrl = 'https://api.github.com/search/code?q=addClass+user:mozilla';

const Home = () => {

    let [item, setItem] = useState([]);
    let [loader, setLoader] = useState(true);
    let [pagination , setPagination] = useState(1);

    useEffect(() => {
        fetch(`${baseUrl}&page=${pagination}&per_page=5`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data.items || []);
                setLoader(false);
            })
            .catch(err => {
                
                setLoader(false);
                console.log(err)
            });
    }, [pagination])
    
    let arr = Array(5).fill(0);

    return (
        <IonPage>
            <NavBar title="XpeedStudio"/> {
                loader
                    ? (arr.map((_, ind) => <SkeletonLoader key={ind}/>))
                    : (
                        <IonContent className="ion-padding">
                            <IonList>
                                {
                                    item.length !== 0 ?
                                    item.map((data, ind) => <GirdDesign data = {data} key={ind}/>)
                                    :
                                    <IonText>
                                        <h4><strong>Data Can't Load Something Wrong 😥❌!</strong></h4>
                                    </IonText>  
                                }
                            </IonList>

                            <IonGrid>
                                <IonRow>
                                    <IonCol size="4">
                                             <IonButton
                                                 shape="round"
                                                 expand="block"
                                                 onClick = {() => {
                                                    setPagination(pagination - 1)
                                                    setLoader(true)
                                                }}
                                              >
                                                  <IonIcon icon = {arrowBackSharp}/>
                                                  <strong> Prev</strong>
                                              </IonButton>
                                    </IonCol>

                                    <IonCol size="4">
                                        <p className="pagetext"><strong> Page: {pagination}</strong></p>
                                    </IonCol>

                                    <IonCol size="4">
                                             <IonButton 
                                                 color="tertiary"
                                                 shape="round" 
                                                 expand="block"
                                                 onClick = {() => {
                                                     setPagination(pagination + 1)
                                                     setLoader(true)
                                                 }}
                                             >
                                                  <strong> Next</strong>
                                                  <IonIcon icon = {arrowForwardSharp}/>
                                             </IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonContent>
                    )
            }
        </IonPage>
    );
};

export default Home;
