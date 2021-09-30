import { StyleSheet } from "react-native";
import { colors, fonts } from '../styles/global';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightTbg, 
    flex: 1,
    alignItems: 'center',
  },
  topContainer: {
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
  },
  logoImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 28,
    color: colors.darkText,
  },
  formContainer: {
    width: 320,
    alignItems: 'center',
  },
  inputContainer: {
    marginVertical: 2,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    fontFamily: fonts.semibold
  },
  inputWrapper: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    width: 320,
    borderWidth: 2,
    borderColor: colors.lightbg,
    borderRadius: 8,
    paddingVertical: 5,
    position: 'relative',
    elevation: 1,
  },
  input: {
    width: '85%',
    marginLeft: 12,
    paddingLeft: 4,
    paddingVertical: 5,
  },
  focusedInput: {
    borderColor: colors.primary,
  },
  inputIcon: {
    position: 'absolute'
  },
  authInstruction: {
    textAlign: 'center',
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.primary,
    marginVertical: 10,
  },
  socialConnectContainer: {
    marginVertical: 10,
  },
})

export default styles