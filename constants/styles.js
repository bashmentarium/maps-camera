import {StyleSheet} from 'react-native'

import colors from './colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  defaultButton: {
    width: 230,
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'bold',
  },
  buttonTextLight: {
    fontSize: 15,
    fontFamily: 'regular',
  },
  labelWrapper: {
    position: 'relative',
  },
  form: {
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    paddingTop: 20,
  },
  inputLabel: {
    fontFamily: 'light',
    fontSize: 16,
    position: 'absolute',
    zIndex: 100,
    top: 4,
    left: -115,
    color: colors.lightgray,
  },
  inputLabelFocused: {
    fontFamily: 'light',
    fontSize: 13,
    position: 'absolute',
    zIndex: 100,
    top: -14,
    left: -115,
    color: colors.lightgray,
  },
  error: {
    borderBottomWidth: 1,
    borderColor: colors.errorText,
    width: '60%',
    fontSize: 16,
    height: 30,
    paddingTop: 4,
    backgroundColor: colors.background,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.contrast,
    color: colors.contrast,
    width: 230,
    fontSize: 16,
    height: 30,
    paddingTop: 4,
    backgroundColor: 'transparent',
    marginBottom: 20,
  },
  errorInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.gray,
    color: colors.contrast,
    width: '60%',
    paddingTop: 4,
    fontSize: 16,
    height: 30,
    backgroundColor: colors.errorText,
  },
  errorText: {
    color: colors.errorText,
    textTransform: 'uppercase',
    fontSize: 12,
    width: '60%',
    fontFamily: 'light',
  },
  invisError: {
    color: colors.background,
    fontSize: 12,
    width: '60%',
    fontFamily: 'light',
    marginBottom: 5,
  },
  label: {
    color: colors.lightgray,
    textTransform: 'uppercase',
    fontSize: 12,
    width: '60%',
    fontFamily: 'light',
  },
  errorLabel: {
    color: colors.errorText,
    fontSize: 12,
    fontFamily: 'regular',
    marginBottom: 5,
  },
  placeItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ccc',
    borderColor: colors.primary,
    borderWidth: 1,
  },
  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    color: colors.contast,
    fontSize: 18,
    marginBottom: 5,
    fontFamily: 'regular',
  },
  address: {
    color: '#666',
    fontSize: 16,
    fontFamily: 'light',
  },
  imagePicker: {
    width: 230,
    justifyContent: 'center',
    alignItems: 'center',

    height: 200,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: colors.contrast,
  },
  cameraButton: {
    width: 50,
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 10,
    flexDirection: 'row',
  },
  cameraButtonImage: {
    width: 35,
    height: 25,
  },
  imagePreview: {
    width: '90%',
    height: '60%',
  },
  locationPicker: {
    marginBottom: 15,
  },
  mapPreview: {
    marginBottom: 10,
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapScreen: {
    flex: 1,
  },
  headerButton: {
    width: 50,
  },
  headerButtonText: {
    fontSize: 16,
    fontFamily: 'regular',
  },
  locationContainer: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  addressContainer: {
    padding: 20,
  },
  mapPreviewDetail: {
    width: '100%',
    maxWidth: 350,
    height: 300,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  placeDetail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    marginTop: 0,
  },
})
