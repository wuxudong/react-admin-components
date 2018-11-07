import React, {Component, Fragment} from 'react';


import {SelectInput, GET_LIST} from 'react-admin'
import {formValues} from 'redux-form'

import dataProvider from '../dataProvider'

class CategorySelector extends Component {
    state = {
        categories: []
    }

    componentDidMount() {
        dataProvider(GET_LIST, 'categories', {
            pagination: {page: 1, perPage: 1024},
            sort: {field: "id", order: "ASC"}
        }).then(json => {
            let array = json.data
            this.setState({
                categories: array
            })
        })
    }


    render() {
        const {l1, l2, source} = this.props

        let l1Options = this.state.categories
        let l2Options = []
        let l3Options = []

        const l1Value = l1Options.find(c => `${c.name}` == l1)

        if (l1Value) {
            l2Options = l1Value.sub
        }

        const l2Value = l2Options.find(c => `${c.name}` == l2)

        if (l2Value) {
            l3Options = l2Value.sub
        }

        return (<Fragment>
            <SelectInput
                source={`${source}.l1`}
                label={'1级分类'}
                allowEmpty={true}
                choices={l1Options}
                optionText="name"
                optionValue="name"
            />

            <SelectInput
                source={`${source}.l2`}
                label={'2级分类'}
                allowEmpty={true}
                choices={l2Options}
                optionText="name"
                optionValue="name"
            />

            <SelectInput
                source={`${source}.id`}
                label={'3级分类'}
                allowEmpty={true}
                choices={l3Options}
                optionText="name"
                optionValue="id"
            />
        </Fragment>);
    }


}


export default formValues(props => ({l1: `${props.source}.l1`, l2: `${props.source}.l2`}))(CategorySelector);
