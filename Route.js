import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomePage from "./src/screens/Home";
import LoginPage from "./src/screens/login";
import SignupPage from "./src/screens/Signup";
import SplashPage from "./src/screens/Splash";
import PolicyPage from "./src/screens/Policy";
import CarouselPage from "./src/screens/Carousels";
import ProfilePage from "./src/screens/Profile";
import PaymentPlanPage from "./src/screens/PaymentPlan";



const MainNavigator = createStackNavigator({

    Splash: { screen: SplashPage },
    Home: { screen: HomePage },
    LogIn: { screen: LoginPage },
    SignUp: { screen: SignupPage },
    Policy: { screen: PolicyPage },
    Carousel: { screen: CarouselPage },
    Profile: { screen: ProfilePage },
    Payment: { screen: PaymentPlanPage },


},
    {
        initialRouteName: "Payment",
        headerMode: "none",
    }
);



const App = createAppContainer(MainNavigator);

export default App;
