import * as React from 'react';
// import React, { Component } from 'react';

import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';
import Axios from 'axios';
// import Selection from './chart/Selection.jsx';
import './App.css'



class Table extends React.PureComponent<{}, IGridProps> {
    private myGrid = React.createRef<JqxGrid>();
    private myPanel = React.createRef<JqxPanel>();
    private columns: IGridProps['columns'] =
        [
            { text: 'Name', datafield: 'Name', width: '25%' },
            { text: 'Gender', datafield: 'Sex', width: '15%' },
            { text: 'Age', datafield: 'Age', width: '15%' },
            { text: 'Survived', datafield: 'Survived', width: '15%' },
            { text: 'Fare', datafield: 'Fare', cellsformat: 'c2', width: '15%' },
            { text: 'Embarked', datafield: 'Embarked', width: '15%' }
        ];

    constructor(props: {}) {
        super(props);
        this.state = {
            columns: this.columns,
            source: []
        };

        this.myGridOnSort = this.myGridOnSort.bind(this);
        this.removeSortBtnOnClick = this.removeSortBtnOnClick.bind(this);
        this.sortBackGroundBtn = this.sortBackGroundBtn.bind(this);
    }

    private myGridOnSort(event: any): void {
        this.myPanel.current!.clearcontent();
        const sortinformation = event.args.sortinformation;
        let sortdirection = sortinformation.sortdirection.ascending ? 'ascending' : 'descending';
        if (!sortinformation.sortdirection.ascending && !sortinformation.sortdirection.descending) {
            sortdirection = 'null';
        }
        const eventData = 'Triggered "sort" event <div>Column:' + sortinformation.sortcolumn + ', Direction: ' + sortdirection + '</div>';
        this.myPanel.current!.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
        // console.log(sortinformatKKKion.sortcolumn, "sortinformation")
        // this.setState({ sort: sortinformation.sortcolumn})
    };

    private removeSortBtnOnClick(): void {
        this.myGrid.current!.removesort();
    };

    private sortBackGroundBtn(event: any): void {
        this.myGrid.current!.setOptions({ showsortcolumnbackground: event.args.checked });
    }


    public componentDidMount() {
        Axios.get('/api/passengers/survival')
            .then(res => {
                var data = res.data;
                return data;
            })
            .then(src => {
                const source: IGridProps['source'] = {
                    datatype: 'json',
                    datafields: [
                        { name: '_id', type: 'string' },
                        { name: 'Age', type: 'number' },
                        { name: 'Cabin', type: 'string' },
                        { name: 'Embarked', type: 'string' },
                        { name: 'Fare', type: 'number' },
                        { name: 'Name', type: 'string' },
                        { name: 'Parch', type: 'number' },
                        { name: 'PaseengerId', type: 'number' },
                        { name: 'Pclass', type: 'number' },
                        { name: 'Sex', type: 'string' },
                        { name: 'SibSp', type: 'number' },
                        { name: 'Survived', type: 'number' },
                        { name: 'Ticket', type: 'string' }
                    ],
                    localdata: src,
                    sortcolumn: 'Name',
                    sortdirection: 'asc'

                }
                const dataAdapter = new jqx.dataAdapter(source);
                this.setState({ source: dataAdapter })
            })
    }

    public render() {

        // const source: IGridProps['source'] = {
        //     datatype: 'json',
        //     datafields: [
        //         { name: '_id', type: 'string' },
        //         { name: 'Age', type: 'number' },
        //         { name: 'Cabin', type: 'string' },
        //         { name: 'Embarked', type: 'string' },
        //         { name: 'Fare', type: 'number' },
        //         { name: 'Name', type: 'string' },
        //         { name: 'Parch', type: 'number' },
        //         { name: 'PaseengerId', type: 'number' },
        //         { name: 'Pclass', type: 'number' },
        //         { name: 'Sex', type: 'string' },
        //         { name: 'SibSp', type: 'number' },
        //         { name: 'Survived', type: 'number' },
        //         { name: 'Ticket', type: 'string' }
        //     ],
        //     localdata: this.state.source,
        //     sortcolumn: 'Name',
        //     sortdirection: 'asc'

        // }
        // const dataAdapter = new jqx.dataAdapter(source);
        return (

            <div>
                <JqxGrid
                    ref={this.myGrid} onSort={this.myGridOnSort}
                    width={700} source={this.state.source} columns={this.state.columns} selectionmode={'multiplecellsadvanced'}
                    pageable={true} filterable={true} autoheight={true} sortable={true} theme={'material-purple'}
                    altrows={true} 
                />

                <div className="text-center" style={{ float: 'left', marginRight: '10px', marginTop: '25px' }}>
                    <JqxButton onClick={this.removeSortBtnOnClick} height={20}>Remove Sort</JqxButton>
                    <div style={{ marginTop: '10px' }} />
                    <JqxCheckBox className="text-center"  onChange={this.sortBackGroundBtn} height={25} checked={true}>Sort Background</JqxCheckBox>
                </div>
                <div className="text-center" style={{ marginLeft: '100px', float: 'left', marginTop: '25px' }}>
                    Event Log:
                        <JqxPanel ref={this.myPanel} style={{ border: 'none' }} width={300} height={80} />
                   
                </div>

            </div>


        );

    }
}

export default Table;
