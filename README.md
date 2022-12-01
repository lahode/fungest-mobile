# FunGest Mobile

## Install Ionic and launch the project

```
npm install -g @ionic/cli
```

```
git clone https://github.com/lahode/fungest-mobile.git
```

```
ionic serve
```

## Configure auth0

Create a new Native application and configure it:

![Auth0 configuration](https://github.com/lahode/fungest-mobile/blob/master/readme/auth0_1.png)

![Auth0 configuration](https://github.com/lahode/fungest-mobile/blob/master/readme/auth0_2.png)

![Auth0 configuration](https://github.com/lahode/fungest-mobile/blob/master/readme/auth0_3.png)

Get the audience from your API application:

![Auth0 configuration](https://github.com/lahode/fungest-mobile/blob/master/readme/auth0_4.png)

## Configure app

Copy auth.config.ts.example to auth.config.ts and set the following information from auth0:

```
export const domain = "{DOMAIN}";
export const clientId = "{CLIENT_ID}";
export const audience = "{AUDIENCE}";
```

In src/pages/Tab2.tsx at line 21, set the back-end URL:

```
const BACKEND_URL = "{BACKEND_URL}";
```

## Deploying app

Follow the tutorial at : https://ionicframework.com/docs/angular/your-first-app/deploying-mobile

And replace the following code at the end of app/manifests/AndroidManifest.xml in Android Studio

```
    <!-- Permissions -->

    <uses-permission android:name="android.permission.INTERNET" />
</manifest>
```

By:

```
    <!-- Permissions -->

    <uses-permission android:name="android.permission.INTERNET" />

    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
    <uses-permission android:name="android.permission.CAMERA" />
</manifest>
```