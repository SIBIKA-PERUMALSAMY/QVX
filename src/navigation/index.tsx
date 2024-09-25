import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; // Importing createStackNavigator
import { routes } from '../routes';
import Walkthrough from '../container/Walkthrough1';
import Walkthroughh from '../container/Walkthrough2';
import Walkthroughhh from '../container/Walkthrough3';
import LoginScreen from '../container/LoginPage';
import LoginPage from '../container/LoginPage';
import ForgotPasswordMob from '../container/ForgotPasswordMob';
import OTPverification from '../container/OTPVerification';
import CreateNewPassword from '../container/CreateNewPassword';
import Dashboard from '../container/Dashboard';

const Stack = createStackNavigator(); // Creating the Stack Navigator

const MyStack: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={routes.Walkthrough}
                component={Walkthrough}
                options={{ title: 'Walkthrough 1', headerShown: false }}
            />
            <Stack.Screen
                name={routes.Walkthroughh}
                component={Walkthroughh}
                options={{ title: 'Walkthrough 2', headerShown: false }}
            />
            <Stack.Screen
                name={routes.Walkthroughhh}
                component={Walkthroughhh}
                options={{ title: 'Walkthrough 3', headerShown: false }}
            />
            <Stack.Screen
                name={routes.LoginPage}
                component={LoginPage}
                options={{ title: 'Login Page', headerShown: false }}
            />
             <Stack.Screen
                name={routes.ForgotPasswordMob}
                component={ForgotPasswordMob}
                options={{ title: 'Forgot Password', headerShown: false }}
            />
            <Stack.Screen
                name={routes.OTPverification}
                component={OTPverification}
                options={{ title: 'OTP Verification', headerShown: false }}
            />
            <Stack.Screen
                name={routes.CreateNewPassword}
                component={CreateNewPassword}
                options={{ title: 'Create New Password', headerShown: false }}
            />
            <Stack.Screen
                name={routes.Dashboard}
                component={Dashboard}
                options={{ title: 'Dashboard', headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default MyStack;
