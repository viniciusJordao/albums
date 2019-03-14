import React, { Component } from 'react';
import {View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({record}) => {

    const { title, artist, thumbnail_image, image, url} = record;
    const { headerContentStyle, headerTextStyle, thumbnailStyle, thumbnailContainerStyle, ImageStyle  } = styles;

    return(
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            
            <CardSection>
                <Image style={ImageStyle} source={{ uri: image }} />
            </CardSection>
            
            <CardSection>
                <Button onTap={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>    
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection:'column',
        justifyContent: 'space-around'
    },
    
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        width:50,
        height:50
    },
    thumbnailContainerStyle: {
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    ImageStyle: {
        height:300,
        flex:1,
        width:null
    }
};

export default AlbumDetail;