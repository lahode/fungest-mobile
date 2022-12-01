import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import ExploreContainer from '../components/ExploreContainer';
import { audience, appId, scope } from "../auth.config";
import './Tab2.css';

interface ICurrentUser {
  avatar: string;
  initials: string;
  language: string;
  name: string;
  permissions: string[];
}

const Tab2: React.FC = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [currentUser, setCurrentUser] = useState<ICurrentUser | undefined>(undefined);
  const BACKEND_URL = "{BACKEND_URL}";

  useEffect(() => {
    (async () => {
      try {

        // Check if user is authenticated.
        if (isAuthenticated) {

          // Fetch token from Auth0.
          const token = await getAccessTokenSilently({
            audience,
            scope,
          });

          // Get the user information from the back-end.
          const response = await axios.get(`${BACKEND_URL}/check-auth`,{
            headers: {
              'app-id': appId,
              'Content-Type' : 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });

          // Set response as current user.
          setCurrentUser(response.data.data);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently, isAuthenticated]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={currentUser?.name || ''} img={currentUser?.avatar || ''} />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
