import React from 'react';
import { useAuth } from '../../contexts/authContext';


export default function SocialConnect() {
  const { signInWithGoogle } = useAuth()

  return ( <></>
    // <View style={styles.socialConnectContainer}>
    //   <TouchableOpacity
    //     style={tw.style("px-6 py-3 rounded flex-row items-center", { backgroundColor: 'rgba(227, 65, 51, .25)'})}
    //     onPress={signInWithGoogle}
    //   >
    //     <AntDesign name="google" size={24} color='rgb(227, 65, 51)' style={[styles.inputIcon], {left: 0, marginRight: 10}} />
    //     <Text style={[{color: 'rgb(227, 65, 51)', fontFamily: fonts.semibold}]}>
    //       Sign in with google</Text>
    //   </TouchableOpacity>
    // </View>
  )
}