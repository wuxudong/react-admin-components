import fakeDataProvider from 'ra-data-fakerest'

export default fakeDataProvider({
    posts: [
        {
            id: 0,
            title: 'Hello, world!',
            rank: 1,
            category: {
                id: 1,
                l1: "水果生鲜",
                l2: "水果",
                l3: "苹果"
            },
            comments: [{id: 0, content: "comment 0 of 0", rank: 1}, {id: 1, content: "comment 1 of 0", rank: 3}, {
                id: 4,
                content: "comment 3 of 0",
                rank: 5
            }]
        },
        {
            id: 1,
            title: 'FooBar',
            rank: 2,
            category: {
                id: 2,
                l1: "水果生鲜",
                l2: "水果",
                l3: "梨"
            },
            comments: [{id: 2, content: "comment 0 of 1", rank: 2}, {id: 3, content: "comment 1 of 1", rank: 4}]
        },
        {
            id: 2,
            title: 'Woo',
            rank: 3,
            category: {
                id: 3,
                l1: "水果生鲜",
                l2: "水果",
                l3: "火龙果"
            },
            comments: [{id: 7, content: "comment 0 of 12", rank: 2}, {id: 8, content: "comment 1 of 2", rank: 4}]
        }
    ],
    categories: [
        {
            name: "水果生鲜",
            sub: [
                {
                    name: "水果",
                    sub: [
                        {
                            id: 1, name: "苹果"
                        },
                        {
                            id: 2, name: "梨"
                        },
                        {
                            id: 3, name: "火龙果"
                        }]
                },
                {
                    name: "生鲜",
                    sub: [
                        {
                            id: 4, name: "鲤鱼"
                        },
                        {
                            id: 5, name: "鲫鱼"
                        },
                        {
                            id: 6, name: "对虾"
                        }]
                }


            ]
        },
        {
            name: "手机数码",
            sub: [
                {
                    name: "手机",
                    sub: [
                        {
                            id: 7, name: "iphone"
                        },
                        {
                            id: 8, name: "华为"
                        },
                        {
                            id: 9, name: "vivo"
                        }]
                },
                {
                    name: "数码",
                    sub: [
                        {
                            id: 10, name: "相机"
                        },
                        {
                            id: 11, name: "mp3"
                        }]
                }
            ]
        }
    ]

})
