import React, {Component, Fragment} from 'react';


import {SelectInput} from 'react-admin'
import {formValues} from 'redux-form'

class CategorySelector extends Component {
    render() {
        const {l1, l2, categoryId, categories} = this.props

        let l1Options, l2Options, l3Options = []
        l1Options = categories

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
                source="l1"
                label={'1级分类'}
                allowEmpty={true}
                choices={l1Options}
                optionText="name"
                optionValue="name"
            />

            <SelectInput
                source="l2"
                label={'2级分类'}
                allowEmpty={true}
                choices={l2Options}
                optionText="name"
                optionValue="name"
            />

            <SelectInput
                source="categoryId"
                label={'3级分类'}
                allowEmpty={true}
                choices={l3Options}
                optionText="name"
                optionValue="id"
            />
        </Fragment>);
    }


}

export default formValues({l1: 'l1', l2: 'l2', categoryId: 'categoryId'})(CategorySelector);
