import { StatusBar, Dimensions } from 'react-native';
import { Colors, Spacing, Size } from './main';

export const Common = {
  fullPage: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    padding: Spacing.medium,
  },
  compContainer: {
    width: '100%',
    paddingBottom: Spacing.regular,
    backgroundColor: 'white',
    marginBottom: Spacing.medium,
  },
  title: {
    color: Colors.textDark,
    fontSize: Size.regular,
    fontWeight: 'bold',
    marginBottom: Spacing.medium,
  },
  border: {
    borderColor: Colors.border,
    borderRadius: Size.radius,
    borderWidth: 1,
  },
  borderBottom: {
    borderBottomColor: Colors.border,
    borderBottomRadius: Size.radius,
    borderBottomWidth: 1,
  },
  input: {
    height: 50,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  authStack: {
    container: {
      padding: Spacing.medium,
      flex: 1,
    },
    background: {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
    },
    header: {
      fontSize: Size.large,
      fontWeight: 'bold',
      color: '#F2404F',
      marginTop: -15,
      textShadowColor: 'black',
    },
    upTitle: {
      color: Colors.textLight,
      fontWeight: 'bold',
      fontSize: Size.large,
      marginTop: Spacing.large,
    },
    subTitle: {
      fontSize: Size.regular,
      color: 'white',
      fontWeight: 'bold',
      marginTop: Spacing.large,
      marginBottom: Spacing.small,
    },
  },
  overlay: {
    container: {
      marginVertical: Spacing.medium,
      paddingVertical: Spacing.regular,
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      fontSize: Size.regular,
      marginBottom: Spacing.regular,
      fontWeight: 'bold',
    },
    instructions: {
      fontSize: Size.small,
      textAlign: 'left',
      width: '100%',
      paddingHorizontal: Spacing.small,
    },
  },
  PositionForm: {
    header: {
      fontWeight: 'bold',
      fontSize: Size.regular,
      color: 'black',
      marginBottom: Spacing.regular,
    },
  },
};
