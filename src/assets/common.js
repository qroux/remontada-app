import { StatusBar } from 'react-native';
import { Colors, Spacing, Size } from './main';

export const Common = {
  fullPage: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    // borderColor: "black",
    // borderWidth: 1,
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
};
