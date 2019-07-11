import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import listing from '../../listing/listings.json'

const { fields, data } = listing
const dataShort = data.map(d => {
  return fields.reduce((o, k, i) => ({ ...o, [k]: d[i] }), {})
})

dataShort.forEach((item, i) => {
  item.id = i
})

class Filter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fillterState: [],
      priceFilter: 1000,
      bathrooms: 1,
      bedrooms: 1,
      value: { min: 0, max: 5000 },
      selected: [],
      selectedId: 1
    }
  }

  componentDidMount () {
    this.setState({
      fillterState: dataShort
    })
   
    this.filterFunction()
  }

  handleOnChange = value => {
    this.setState(state => {
      if (this.filterFunction()) return undefined
      else return { priceFilter: value }
    })
  }
  handleFilter = value => {
    this.filterFunction()
  }

  filterFunction = () => {
    const products = []
    for (var i = 0; i < dataShort.length; i++) {
      if (
        dataShort[i].bedrooms === this.state.bedrooms &&
        dataShort[i].bathrooms === this.state.bathrooms &&
        dataShort[i].price <= this.state.priceFilter
      ) {
        products.push(dataShort[i])
      }
    }

    this.setState({ fillterState: products })
  }
  renderShowsTotal (start, to, total) {
    return <p style={{ color: 'blue' }} />
  }

  isExpandableRow =(row) =>{
    console.log('isExpandableRow ', row);
    if(row.id==this.state.selectedId)
        return true
    return false;
  }

  expandComponent (row) {
    const products2 = []
    for (var i = 0; i < dataShort.length; i++) {
      if (dataShort[i].id === this.state.selectedId) {
        products2.push(dataShort[i])
      }
    }
    if (products2[0]) {
      return (
        <div>
          <div className='row'>
          <div className='col-sm-4 pro-image-pr'>
            <div className='pro-image'>
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/img/' +
                  products2[0].image_id +
                  '.jpg'
                }
              />
            </div>
            </div>
            <div className='col-sm-8'>
              <span>
                <h4>{'$' + products2[0].price}</h4>
              </span>
              <span>
                <h5>
                  {products2[0].bedrooms} Bedrooms - {products2[0].bathrooms}{' '}
                  Bathrooms
                </h5>
              </span>
              <span> {products2[0].address},</span><br></br>
              <span> {products2[0].city},  {products2[0].state}</span>
              <div className='row mar-top'>
                <div className='btn-toolbar'>
                  <div
                    className='btn-group'
                    role='group'
                    aria-label='First group'
                  >
                    <button className='button btn btn-warning btn-sm'>
                      Check Availability
                    </button>
                    <button className='button btn btn-info btn-sm'>
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render () {
   
    const options = {
      page: 1, // which page you want to show as default
      sizePerPageList: [
        {
          text: '5',
          value: 5
        },
        {
          text: '10',
          value: 10
        },
        {
          text: 'All',
          value: this.state.fillterState.length
        }
      ], // you can change the dropdown list for size per page
      sizePerPage: 5, // which size per page you want to locate as default
      pageStartIndex: 1, // where to start counting the pages
      paginationSize: 3, // the pagination bar size.
      prePage: 'Prev', // Previous page button text
      nextPage: 'Next', // Next page button text
      firstPage: 'First', // First page button text
      lastPage: 'Last', // Last page button text
      prePageTitle: 'Go to previous', // Previous page button title
      nextPageTitle: 'Go to next', // Next page button title
      firstPageTitle: 'Go to first', // First page button title
      lastPageTitle: 'Go to Last', // Last page button title
      paginationShowsTotal: this.renderShowsTotal, // Accept bool or function
      paginationPosition: 'bottom', // default is bottom, top and both is all available
       //keepSizePerPageState: true, //default is false, enable will keep sizePerPage dropdown state(open/clode) when external rerender happened
      // hideSizePerPage: true, // You can hide the dropdown for sizePerPage
       alwaysShowAllBtns: true, // Always show next and previous button
       withFirstAndLast: false, // Hide the going to First and Last page button
       hidePageListOnlyOnePage: true, // Hide the page list if only one page.
     
    }
    let { priceFilter } = this.state

    const onRowSelect = ({ id }, isSelected) => {
      this.setState({
        selectedId: id
      })
     
      return false
    }

    const selectRowProp = {
      mode: 'radio',
      clickToSelect: true,
      clickToExpand: true, // you should add this to trigger selection and expand both on clicking
      onSelect: onRowSelect, // manage the selection state
      selected: this.state.selected, // set selected as a state data
      hideSelectColumn: true
    }

    return (
      <div>
        <main id='page-content-wrapper' role='main'>
          <div className='container custom-container'>
            <div className='form-group'>
              <h3 className='top-title'>Apartments in Ann Arbor, MI</h3>
            </div>
            <div className='form-group'>
              <div className='spacer'>
                  <div className='col-md-4'>
                  <div
                      className='btn-group custom-filter'
                      role='group'
                      aria-label='Third group'
                    >
                      <span className='text-box'> BedRooms</span>
                    </div>
                    <div className='btn-group custom-filter mr-2' role='group'>
                      <button
                        type='button'
                        className={
                          'btn btn-secondary ' +
                          (this.state.bedrooms == 1 ? 'activeCls' : '')
                        }
                        onClick={() =>
                          this.setState({ bedrooms: 1 }, this.handleFilter)
                        }
                      >
                        1+
                      </button>
                      <button
                        type='button'
                        className={
                          'btn btn-secondary ' +
                          (this.state.bedrooms == 2 ? 'activeCls' : '')
                        }
                        onClick={() =>
                          this.setState({ bedrooms: 2 }, this.handleFilter)
                        }
                      >
                        2+
                      </button>
                      <button
                        type='button'
                        className={
                          'btn btn-secondary ' +
                          (this.state.bedrooms == 3 ? 'activeCls' : '')
                        }
                        onClick={() =>
                          this.setState({ bedrooms: 3 }, this.handleFilter)
                        }
                      >
                        3+
                      </button>
                      <button
                        type='button'
                        className={
                          'btn btn-secondary ' +
                          (this.state.bedrooms == 4 ? 'activeCls' : '')
                        }
                        onClick={() =>
                          this.setState({ bedrooms: 4 }, this.handleFilter)
                        }
                      >
                        4+
                      </button>
                      <button
                        type='button'
                        className={
                          'btn btn-secondary ' +
                          (this.state.bedrooms == 5 ? 'activeCls' : '')
                        }
                        onClick={() =>
                          this.setState({ bedrooms: 5 }, this.handleFilter)
                        }
                      >
                        5+
                      </button>
                    </div>
                      </div>
                      <div className='col-md-4'>
                      <div className='btn-group custom-filter' role='group'>
                      <span className='text-box'> BothRooms</span>
                    </div>
                    <div
                      className='btn-group custom-filter mr-2'
                      role='group'
                      aria-label='Second group'
                    >
                      <button
                        type='button'
                        className={
                          'btn btn-secondary ' +
                          (this.state.bathrooms == 1 ? 'activeCls' : '')
                        }
                        onClick={() =>
                          this.setState({ bathrooms: 1 }, this.handleFilter)
                        }
                      >
                        1+
                      </button>
                      <button
                        type='button'
                        className={
                          'btn btn-secondary ' +
                          (this.state.bathrooms == 2 ? 'activeCls' : '')
                        }
                        onClick={() =>
                          this.setState({ bathrooms: 2 }, this.handleFilter)
                        }
                      >
                        2+
                      </button>
                      <button
                        type='button'
                        className={
                          'btn btn-secondary ' +
                          (this.state.bathrooms == 3 ? 'activeCls' : '')
                        }
                        onClick={() =>
                          this.setState({ bathrooms: 3 }, this.handleFilter)
                        }
                      >
                        3+
                      </button>
                      <button
                        type='button'
                        className={
                          'btn btn-secondary ' +
                          (this.state.bathrooms == 4 ? 'activeCls' : '')
                        }
                        onClick={() =>
                          this.setState({ bathrooms: 4 }, this.handleFilter)
                        }
                      >
                        4+
                      </button>
                      <button
                        type='button'
                        className={
                          'btn btn-secondary ' +
                          (this.state.bathrooms == 5 ? 'activeCls' : '')
                        }
                        onClick={() =>
                          this.setState({ bathrooms: 5 }, this.handleFilter)
                        }
                      >
                        5+
                      </button>
                    </div>
                      </div>
                      <div className='col-md-4'>
                      <div className='btn-group mr-2 slider-in' role='group'>
                    <span className='text-price'> Price</span>
                    <Slider
                      value={priceFilter}
                      onChange={this.handleOnChange}
                      min={0}
                      max={5000}
                    />
                  </div>
                      </div>
               
              </div>
            </div>
            <div className='form-group'>
              <BootstrapTable
                striped
                hover
                data={this.state.fillterState}
                pagination
                options={options}
                expandableRow={this.isExpandableRow}
                expandComponent={() => this.expandComponent()}
                selectRow={selectRowProp}
                striped
              >
                {
                            fields.map((f, i) => (
                                <TableHeaderColumn dataField={f} hidden={f==='image_id'} isKey={i === 0 ? true : false} key={f}>{f}</TableHeaderColumn>
                            ))
                        }

              </BootstrapTable>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Filter
