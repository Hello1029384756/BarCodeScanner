import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class TransactionScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            scannedData: '',
            scanned: false,
            hasCameraPermissions: null,
            buttonState: 'normal'
        }
}

    getCameraPermissions = async() => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);

        this.setState ({
            hasCameraPermissions: status === "granted"
        })
    }

    handleBarCodeScanned = async({type, data}) => {
        this.setState({
            scannedData: data,
            buttonState: 'normal',
            scanned: true
        })
    }

    render() {
        const hasCameraPermissions = this.state.hasCameraPermissions
        const scanned = this.state.scanned
        const buttonState = this.state.buttonState
        
        if(buttonState === 'clicked' && hasCameraPermissions) {
        return (
            <BarCodeScanner
                onBarCodeScanned = {scanned ? undefined: this.handleBarCodeScanned}
            />
        )
        } else if ( buttonState === 'normal') {
            return(
            <View>
                <Text>
                    {hasCameraPermissions===true? this.state.scannedData: "Request Camera Access"}
                </Text>
                <TouchableOpacity onPress={this.getCameraPermissions} style={{justifyContent: "center", backgroundColor: 'orange', marginTop: 500, width: 200, textSize: 25, textAlign: "center", marginLeft: 250}}>
                <Text>Scan Screen</Text>
                </TouchableOpacity>
            </View>
            )
        }
    }
}