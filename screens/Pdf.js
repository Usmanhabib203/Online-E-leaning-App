import React from 'react';
import { View } from 'react-native';
import Pdf from 'react-native-pdf';


const PDFViewer = () => {
    const pdfPath = require('../assets/pdf1.pdf');
  
    return (
      <View style={{ flex: 1 }}>
        <Pdf
          source={pdfPath}
          style={{ flex: 1 }}
        />
      </View>
    );
  };
  
  export default PDFViewer;
  

