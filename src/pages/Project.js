import {Table,Tag,Avatar,Icon} from "web3uikit"
export default function Project(){
    return(        
        <Table
            columnsConfig="80px 3fr 2fr 2fr 80px"
            data={[
            [
                <Avatar isRounded size={36} theme="image"/>,
                'Moralis Magi',
                <Tag color="blue" text="Nft Collection"/>,
                '0x18...130e',
                <div onClick={console.log("Clicked")}>
                    <Icon fill="black" size={30} svg="moreVert"/>
                </div>
            ],
            [
                <Avatar fontSize={36} isRounded theme="image"/>,
                'My Cool Nft',
                <Tag color="red" text="Lazy Nft"/>,
                '0x18...130e',
                <Icon fill="black" size={30} svg="moreVert"/>,
            ],
            [
                <Avatar fontSize={36} isRounded theme="image"/>,
                'Magi Cool Topen',
                <Tag color="yellow" text="Pack"/>,
                '0x18...130e',
                <Icon fill="black" size={30} svg="moreVert"/>
            ],
            [
                <Avatar fontSize={36} isRounded theme="image"/>,
                'My Marketplace',
                <Tag color="red" text="Nft Marketplace"/>,
                '0x18...130e',
                <Icon fill="black" size={30} svg="moreVert"/>
            ],
            [
                <Avatar fontSize={36} isRounded theme="image"/>,
                'Owl Magi',
                <Tag color="purple" text="Bundle"/>,
                '0x18...130e',
                <Icon fill="black" size={30} svg="moreVert"/>
            ],

            [
                <Avatar fontSize={36} isRounded theme="image"/>,
                'Moralis Magi',
                <Tag color="blue" text="Nft Collection"/>,
                '0x18...130e',
                <Icon fill="black" size={30} svg="moreVert"/>
            ],
            [
                <Avatar fontSize={36} isRounded theme="image"/>,
                'My Cool Nft',
                <Tag color="red" text="Lazy Nft"/>,
                '0x18...130e',
                <Icon fill="black" size={30} svg="moreVert"/>
            ],
            [
                <Avatar fontSize={36} isRounded theme="image"/>,
                'Magi Cool Topen',
                <Tag color="yellow" text="Pack"/>,
                '0x18...130e',
                <Icon fill="black" size={30} svg="moreVert"/>
            ]
            ]}
            header={[
            '',
            <span>Name</span>,
            <span>Type</span>,
            <span>Module</span>,
            ''
            ]}
            isColumnSortable={[
            false,
            true,
            false,
            false
            ]}
            maxPages={3}
            onPageNumberChanged={function noRefCheck(){}}
            onRowClick={function noRefCheck(){}}
            pageSize={5}
            />
    )
}