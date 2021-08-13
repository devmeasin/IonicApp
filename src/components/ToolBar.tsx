import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const NavBar: React.FC<{title:any}> = ({title}) => {

    return (
      
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                            <strong>{title}</strong>
                    </IonTitle>
                </IonToolbar>

            </IonHeader>
     
    )
}

export default NavBar;