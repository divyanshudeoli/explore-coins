import {Form} from "web3uikit"
export default function AddProject(){
    return(
        <Form
        buttonConfig={{
            onClick: function noRefCheck(){},
            theme: 'primary'
        }}
        data={[
            {
            name: 'Project Name',
            type: 'text',
            value: ''
            },
            {
                name: 'project-type',
                options: [
                    'Chain',
                    'Token'
                ],
                type: 'radios',
                value: 'Project Type'
            },
            {
                inputWidth: '70%',
                name: 'Website',
                type: 'text',
                value: ''
            },
            {
                inputWidth: '70%',
                name: 'Founders',
                type: 'text',
                value: ''
            },
            {
            name: 'category',
            options: [
                'DeFi',
                'NFT',
                'DAO',
                'Gaming',
                'Other'
            ],
            type: 'radios',
            value: 'Choose Category?'
            },
            {
                inputWidth: '40%',
                name:"Launch-Date",
                type:"date"
                
            },
            {
                inputWidth: '70%',
                name: 'WhitePaper',
                type: 'text',
                value: ''
            },
            {
                inputWidth: '70%',
                name: 'CoinMarketCap',
                type: 'text',
                value: ''
            },
            {
                inputWidth: '70%',
                name: 'Github',
                type: 'text',
                value: ''
            },
            {
                inputWidth: '70%',
                name: 'Discord',
                type: 'text',
                value: ''
            },
            {
                inputWidth: '70%',
                name: 'Twitter',
                type: 'text',
                value: ''
            },
            {
                name: 'Time Period',
                selectOptions: [
                  {
                    id: 'day',
                    label: 'Day'
                  },
                  {
                    id: 'week',
                    label: 'Week'
                  },
                  {
                    id: 'month',
                    label: 'Month'
                  },
                  {
                    id: 'Year',
                    label: 'Year'
                  }
                ],
                type: 'select',
                value: ''
            },
            {
            inputWidth: '100%',
            name: 'Any more comments?',
            type: 'textarea',
            validation: {
                required: true
            },
            value: 'Comments'
            }
        ]}
        onSubmit={function noRefCheck(){}}
        title="Add Project"
        />
    )
}