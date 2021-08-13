import { IonContent, IonSkeletonText } from '@ionic/react';
import React from 'react';
import './style.css';


const SkeletonLoader : React.FC = () => {

  return (
      
    <IonContent>
     
        <>
          <div className="ion-padding custom-skeleton">
            <IonSkeletonText animated style={{ width: '75%' }} />
            <IonSkeletonText animated style={{ width: '60%' }}/>
            <IonSkeletonText animated style={{ width: '65%' }} />
            <IonSkeletonText animated style={{ width: '70%' }} />
            <IonSkeletonText animated style={{ width: '60%' }} />
          </div>
        </>
      
    </IonContent>
  );
};

export default SkeletonLoader;