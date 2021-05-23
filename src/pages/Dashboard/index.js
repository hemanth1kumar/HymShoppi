import React from 'react'

import Header from '../../components/Header';
import Item from '../../components/Item';
import { DashboardWrapper, DashboardBody, ItemsWrapper } from "./styles";

const Items = [
    { id: 1, name: 'Hats', route: '/category/hats', imgUrl: 'https://static6.depositphotos.com/1000261/636/i/950/depositphotos_6367048-stock-photo-panama-hat.jpg' },
    { id: 2, name: 'Jackets', route: '/category/jackets', imgUrl: 'http://www.velosaudia.com/image/cache/catalog/2019%20Products/Winter%20Wear/HD-308-2-600x600.jpg' },
    { id: 3, name: 'Shoes', route: '/category/shoes', imgUrl: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' },
    { id: 4, name: 'Women', route: '/category/women', imgUrl: 'https://kevsbest.com/wp-content/uploads/2020/04/Price-Angel-Women-Clothing-Shop.jpg' },
    { id: 5, name: 'Men', route: '/category/men', imgUrl: 'https://content.internetretailing.net/AcuCustom/Sitename/DAM/040/Men_male_power_shopping_Fotolia_178989483_Subscription_Monthly_M.jpg' }
]

export default class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <DashboardWrapper>
                <Header toggleTheme={this.props.toggleTheme} active="home" />
                <DashboardBody>
                    <ItemsWrapper>
                        {Items.map(item => <Item key={item.id} {...item} link={item.route} />)}
                    </ItemsWrapper>
                </DashboardBody>
            </DashboardWrapper>
        )
    }
}