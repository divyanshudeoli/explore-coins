import {TextArea,Button,Icon} from 'web3uikit';

export default function Posts(){
    return(
        <div>
            <h1>
                Posts
            </h1>
            <TextArea
                label="Posts"
                name="Post TextArea"
                value="Write about your favrouite crypto project here"
                width="50%"
            />
            <Button
            color="blue"
            text="Post"
            theme="colored"
            />
            
            <Icon svg="matic"></Icon>        
        </div>
    )
}