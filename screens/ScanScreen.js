import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions'
import { BarCodeScanner } from 'expo-barcode-scanner';


export default class ScanScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermissions:null,
            scanned:false,
            scannedData:'',
            buttonState:'normal'
        }
    }
    
getCameraPermissions=async()=>{
    const {status}=await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
        hasCameraPermission:status === "accepted",
        buttonState:"clicked",
        scanned:false,
    })
    }
        handleBarcodeScanned=async({type,data})=>{
            this.setState({
                scanned:true,
                scannedData:data,
                buttonState:"normal",
            })
        }
        render(){
            const hasCameraPermission = this.state.hasCameraPermission;
            const scanned = this.state.scanned;
            const buttonState = this.state.buttonState;
            

            if(buttonState==="clicked" && hasCameraPermission){
                return(
                    <BarCodeScanner
                    onBarCodeScanned={scanned?undefined:this.handleBarcodeScanned}>
                    </BarCodeScanner>
                )
            }
            else if(buttonState==="normal"){
                    return(
                        <View style = {styles.container}>
                            <Text styles={styles.displayText}>{ 
                            hasCameraPermission===true? this.state.scannedData:"Request For Camera Permissions" } </Text>
                          
                            <TouchableOpacity onPress={this.getCameraPermissions} style ={styles.scanner}>
                                <Text style={styles.buttonText}>Scan QR Code</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            }
            }
            const styles = StyleSheet.create({
                container:{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center'
                },
                displayText:{
                    fontSize:25,
                    textDecorationLine:'underline',
                },
                scanner:{
                    backgroundColor:"green",
                    margin:30,
                },
                buttonText:{

            fontSize:20,
                }
            })