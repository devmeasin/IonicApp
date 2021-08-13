import { IonItem, IonText } from '@ionic/react';
import dayjs from 'dayjs';
import './style.css';

// let date = dayjs("2016-12-16T20:44:13Z").format('DD/MMM/YYYY h:mm A')


const ReleaseDesign: React.FC<{data:any}> = ({data}) => {

    return (

        <IonItem>
            <IonText>
               <p><strong>ID: </strong>{data.id || ''}</p>
               <p><strong>Version: </strong>{data.tag_name || ''}</p>
               <p><strong>Create Date: </strong>{dayjs(data.created_at).format('DD/MMM/YYYY') || ''}</p>   
               {/* <p><strong>Create Date: </strong>{dayjs(data.created_at).format('DD/MMM/YYYY - ddd - h:mm A') || ''}</p>    */}
            </IonText>
        </IonItem>
    )
}

export default ReleaseDesign;