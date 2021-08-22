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
    let [postPerPage] = useState(5);
    let [perPage , setPerPage] = useState(100);
    let [incrisePage , setIncrisePage] = useState(1)
    let [firstLoad , setFirstLoad] = useState(true);


    useEffect(() => {
        fetch(`${baseUrl}&page=${incrisePage}&per_page=${perPage}`)
            .then((res) => res.json())
            .then((data) => {
                if(firstLoad) {
                    setItem(data.items || []);
                } else {
                    item.push(...data.items);
                    console.log('Hello True')
                }
                
                setLoader(false);
            })
            .catch(err => {
                setLoader(false);
                console.log(err)
            });
    }, [perPage])



    let indexOfLastPost = pagination * postPerPage;
    let indexOfFirstPost = indexOfLastPost - postPerPage;
    let currentPost = item.slice(indexOfFirstPost , indexOfLastPost)
    console.log(indexOfFirstPost , indexOfLastPost , currentPost)


    if(indexOfLastPost > perPage) {
        setPerPage(perPage + 100);
        setIncrisePage(incrisePage + 1)
        setLoader(true);
        setFirstLoad(false)
    }
    
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
                                    currentPost.length !== 0 ?
                                    currentPost.map((data, ind) => <GirdDesign data = {data} key={ind}/>)
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
                                                 disabled = {pagination === 1 ? true : false}
                                                 onClick = {() => {
                                                    pagination > 1 ? setPagination(pagination - 1) : setPagination(1)
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
                                                 disabled = {indexOfLastPost === 1000 ? true : false}
                                                 color="tertiary"
                                                 shape="round" 
                                                 expand="block"
                                                 onClick = {() => {
                                                     setPagination(pagination + 1)
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
