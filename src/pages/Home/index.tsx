import { IonButton, IonCol, IonContent, IonGrid, IonList, IonPage, IonRow, IonText } from '@ionic/react';
import { useEffect, useState } from 'react';
import GirdDesign from '../../components/GirdDesign';
import SkeletonLoader from '../../components/SkeletonLoader';
import NavBar from '../../components/ToolBar';


const baseUrl = 'https://api.github.com/search/code?q=addClass+user:mozilla';

const Home: React.FC = () => {

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
            .catch(err => console.log(err));
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
                                    <IonCol size="6">
                                             <IonButton  
                                             shape="round" 
                                             expand="block"
                                             onClick = {():any => {
                                                setPagination(pagination - 1)
                                                setLoader(true)
                                            }}
                                             >
                                                 Prev Button
                                            </IonButton>
                                    </IonCol>

                                    <IonCol size="6">
                                             <IonButton 
                                             color="tertiary"
                                             shape="round" 
                                             expand="block"
                                             onClick = {():any => {
                                                 setPagination(pagination + 1)
                                                 setLoader(true)
                                             }}
                                             >Next Button</IonButton>
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
