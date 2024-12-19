// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStartedPage from './screens/GetStartedPage';
import HomePage from './screens/HomePage';
import CourseListPage from './screens/CourseListPage';
import CourseDetailsPage from './screens/CourseDetailsPage';
import ProgressPage from './screens/ProgressPage';
import NotificationsPage from './screens/NotificationsPage';
import ProfilePage from './screens/ProfilePage';
import EnrollPage from './screens/EnrollPage';
import StartCoursePage from './screens/StartCoursePage';
import CoursesPage from './screens/CoursesPage';
import EditProfilePage from './screens/EditProfilePage';
import LoginPage from './screens/LoginPage';
import RegisterScreeen from './screens/Register';
import QuizScreen from './screens/QuizeScreen';
import SettingsScreen from './screens/SettingScreen';
import CoursePage from './screens/CoursePage';
import AboutScreen from './screens/AboutScreen';
import Sameen from './screens/Sameen';
import Lecture from './screens/Lecture';
import Privacy from './screens/Privacy';
// import PDFViewer from './screens/pdf';
// import VideoScreen from './screens/videoScreen';
import Videoa from './screens/Videoa';
import Videob from './screens/Videob';
import Videoc from './screens/Videoe';
import Videod from './screens/Videod';
import Contact from './screens/ContactScreen';




const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Get">

        <Stack.Screen name='Get' component={GetStartedPage}
        options={{ headerShown: false }}/>
      <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreeen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="Home"
         component={HomePage}
          options={{ headerShown: false }}
           />
        <Stack.Screen name="CourseList" component={CourseListPage} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="CourseDetails" component={CourseDetailsPage}
        options={{ headerShown: false }} />
        <Stack.Screen name="Progress" component={ProgressPage}
        options={{ headerShown: false }} />
        <Stack.Screen name="Notifications" component={NotificationsPage} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={ProfilePage}
        options={{ headerShown: false }} />
        <Stack.Screen name="Enroll" component={EnrollPage}
        options={{ headerShown: false }}/>
        <Stack.Screen name="StartCourse" component={StartCoursePage}
        options={{ headerShown: false }}/>
        <Stack.Screen name='Course' component={CoursePage}
        options={{ headerShown: false }} />

        <Stack.Screen name='Courses' component={CoursesPage}
        options={{ headerShown: false }}/>
        <Stack.Screen name ="EditProfile" component={EditProfilePage}
        options={{ headerShown: false }} />
        <Stack.Screen name ="Quize" component={QuizScreen}  options={{ headerShown: false }} />
        <Stack.Screen name='Setting' component={SettingsScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name='About' component={AboutScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name='Sameen' component={Sameen}/>
        <Stack.Screen name='Contact' component={Contact}  options={{ headerShown: false }}/>
        {/* <Stack.Screen name ='Video' component={VideoScreen}/> */}

        {/* <Stack.Screen name='Pdf' component={PDFViewer}/> */}
        <Stack.Screen name='Lecture' component={Lecture}
        options={{ headerShown: false }}/>
        <Stack.Screen name='Privacy' component={Privacy}/>
        <Stack.Screen name='Videoa' component={Videoa}   options={{ headerShown: false }}
/>
        <Stack.Screen name='Videob' component={Videob}   options={{ headerShown: false }}
/>
        <Stack.Screen name='Videoc' component={Videoc}  options={{ headerShown: false }}/>
        <Stack.Screen name ='Videod' component={Videod}  options={{ headerShown: false }}/>
       

         </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
