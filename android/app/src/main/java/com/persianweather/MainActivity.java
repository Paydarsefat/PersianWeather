package com.persianweather;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.sensormanager.SensorManagerPackage;
import java.util.Arrays;
import java.util.List;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "PersianWeather";
    }
     protected List<ReactPackage> getPackages() {
       return Arrays.<ReactPackage>asList(
         new MainReactPackage(), // <---- add comma
         new SensorManagerPackage() // <---------- add package
       );
     }
      @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
     return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
      return new RNGestureHandlerEnabledRootView(MainActivity.this);
     }

   };
 }

 
}
