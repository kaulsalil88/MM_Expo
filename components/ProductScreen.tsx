import { View ,Text} from "./Themed";
import {useReviews} from '@mosaic-wellness/redux-action-library'

export default function ProductScreen(){

    const getReviews = () => {
        useReviews.getReviews()
    }

    return (
        <View>
            <Text>Salil Sample Text</Text>
        </View>
    )
}