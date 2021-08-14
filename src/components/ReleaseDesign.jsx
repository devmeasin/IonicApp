import { IonBadge, IonItem, IonText } from '@ionic/react';
import dayjs from 'dayjs';
import './style.css';

// let date = dayjs("2016-12-16T20:44:13Z").format('DD/MMM/YYYY h:mm A')


const ReleaseDesign = ({data}) => {

    return (

        <IonItem>
            <IonText>
               <p><strong>ID: </strong>{data.id || ''}</p>
               <p><strong>Version: </strong>
                    <IonBadge color = 'success' className='rele_icon'>
                        {data.tag_name || ''}
                    </IonBadge>
               </p>
               <p><strong>Create Date: </strong>{dayjs(data.created_at).format('DD/MMM/YYYY') || ''}</p>   
               {/* <p><strong>Create Date: </strong>{dayjs(data.created_at).format('DD/MMM/YYYY - ddd - h:mm A') || ''}</p>    */}
            </IonText>
        </IonItem>
    )
}

export default ReleaseDesign;