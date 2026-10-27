import React from 'react';
import {ScrollView, Text} from 'react-native';
import Boat from './components/Boats';

const AllBoats = () => {
    return (
        <ScrollView>
            <Text></Text>
            <Text style={{ fontWeight: 'bold', color: 'gray' }}>Getaboat - For Sale</Text>
            <Text></Text>

            <Boat
                name="SEA RAY 500 SUNDANCER"
                description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                picture={require('./img/sea_ray.jpg')}
            />

            <Boat
                name="FOUR WINNS HORIZON 180"
                description="A sporty look and refined details truly set the Horizon 180 above all others."
                picture={require('./img/four_winns.jpg')}
            />

            <Boat
                name="FLIPPER 640 ST"
                description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                picture={require('./img/flipper.jpg')}
            />

            <Boat
                name="PRINCESS V48"
                description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                picture={require('./img/princess.jpg')}
            />

            <Boat
                name="BAYLINDER 175 BOWRIDER"
                description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                picture={require('./img/bayliner.jpg')}
            />

            <Boat
                name="FAIRLINE TARGA 47"
                description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                picture={require('./img/fairline.jpg')}
            />
        </ScrollView>
    );
};

export default AllBoats;