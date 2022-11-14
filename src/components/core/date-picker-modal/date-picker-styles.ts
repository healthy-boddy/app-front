import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  textInput: {
    textAlign: 'left',
    color: '#484851',
    fontSize: 14,
    lineHeight: 16,
    marginLeft:8,
    fontWeight:'400'
  },
  marginTop: {
    marginTop: 20,
  },
  modalView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  modalData: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: '#E9E9E9',
  },
  topModalElem: {
    backgroundColor: 'white',
    height: 256,
    overflow: 'hidden',
  },
  btn: {
    position: 'absolute',
    top: 0,
    height: 42,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCancel: {
    left: 0,
  },
  btnDone: {
    right: 0,
  },
  btnText: {
    fontSize: 16,
    color: '#484851',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  errorStyles: {
    top: 0,
    marginLeft: 30,
    transform: [
      {
        translateY: -15,
      },
    ],
  },
  errorBorder: { borderColor: '#FFCDD8' },
  width100: { width: '100%' },
  transformIconRight: {
    transform: [
      {
        translateX: -40,
      },
    ],
  },
});
