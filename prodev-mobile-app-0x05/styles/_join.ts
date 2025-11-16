import { StyleSheet, Dimensions } from "react-native";

// Constants for reusable values (copied from _mainstyle for local use if necessary)
const COLORS = {
  white: "#fff",
};

const SPACING = {
  small: 10,
  medium: 20,
  large: 40,
};

const FONT_SIZE = {
  small: 18,
  medium: 24,
  large: 40,
};

const BORDER_RADIUS = {
  large: 36,
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  iconsection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22
  },
  titleTextGroup: {
    marginTop: 20
  },

  // FIX: Mapping 'largeText' to the defined 'titleText'
  largeText: {
    fontWeight: '700',
    fontSize: 39,
  },
  titleText: {
    fontWeight: '700',
    fontSize: 39,
  },

  // FIX: Mapping 'smallText' to the defined 'subText' (if used for smaller text)
  smallText: {
    fontWeight: '400',
    fontSize: 12,
    color: '#7E7B7B'
  },
  subText: {
    fontWeight: '400',
    fontSize: 12,
    color: '#7E7B7B'
  },

  formGroup: {
    marginTop: 44,
    rowGap: 10
  },
  formLabel: {
    fontSize: 18,
    fontWeight: '400',
    color: '#7B7B7B',
    marginBottom: 7
  },

  // FIX: Mapping 'placeholderText' to the defined 'formLabel'
  placeholderText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#7B7B7B',
    marginBottom: 7
  },

  // FIX: Mapping 'inputField' to the defined 'formControl'
  inputField: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: '#E9E9E9',
    paddingHorizontal: 10
  },
  formControl: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: '#E9E9E9',
    paddingHorizontal: 10
  },

  // FIX: Mapping 'passwordGroup' to the defined 'formPasswordControl'
  passwordGroup: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: '#E9E9E9',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  formPasswordControl: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: '#E9E9E9',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  passwordControl: {
    flex: 1
  },

  // FIX: Mapping 'button' to the defined 'primaryButton'
  button: {
    backgroundColor: '#34967C',
    height: 53,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  },
  primaryButton: {
    backgroundColor: '#34967C',
    height: 53,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '300'
  },

  // FIX: Mapping 'socialMediaButtonGroup' to 'secondaryButtonGroup'
  socialMediaButtonGroup: {
    rowGap: 15,
    marginTop: 15,
  },
  secondaryButtonGroup: {
    rowGap: 15,
    marginTop: 15,
  },

  // FIX: Mapping 'socialMediaButton' to 'secondaryButton'
  socialMediaButton: {
    height: 53,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 10,
    borderWidth: 1,
  },
  secondaryButton: {
    height: 53,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 10,
    borderWidth: 1,
  },

  // FIX: Mapping 'socialMediaButtonText' to 'secondaryButtonText'
  socialMediaButtonText: {
    fontSize: 18,
    fontWeight: '400'
  },
  secondaryButtonText: {
    fontSize: 18,
    fontWeight: '400'
  },

  signupgroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 20,
  },

  // FIX: Mapping 'subTextJoin' to 'signupSubTitleText'
  subTextJoin: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFA800'
  },
  signupTitleText: {
    fontSize: 18,
    fontWeight: '400'
  },
  signupSubTitleText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFA800'
  },

  dividerGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    marginBottom: 25,
    marginTop: 29,
  },
  divider: {
    borderWidth: 1,
    flex: 1,
    borderColor: '#e6e6e6'
  },
  dividerText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#C2C2C2'
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: '#34967C',
    marginTop: 9,
  },
  navGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  // Add other necessary styling properties
  },
});

export { styles }