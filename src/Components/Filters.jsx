import React, { useEffect, useState, useRef } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import FilterCheckbox from './FilterCheckbox';
import { clearAll, getWood, selectWoodTypes } from '../Store/Slices/AllProducts';
import { useDispatch, useSelector } from 'react-redux';
import FilterPrice from './FilterPrice';

function Filters() {
    const filters = ['Wood Type', 'Price']
    const checkRef = useRef([])
    const startRef = useRef()
    const lastRef = useRef()
    const filterTypes = [{filterName: 'Wood Type'}, {filterName: 'Price'}]
    const [filter, setFilter] = useState([])
    const dispatch = useDispatch()
    const woodTypes = useSelector(selectWoodTypes)
    const [showArr, setShowArr] = useState(Array(filters?.length).fill(false))
    const handleFilterArr = (filt) => {
        let wood_type = [...new Set(woodTypes)]
        let setData = filt.map((item)=>{
                if (item.filterName === 'Wood Type') {
                    return { filterName: item.filterName, woodFilter: wood_type }
                  }
                  if (item.filterName === 'Price') {
                    return { filterName: item.filterName, startPrice: 0, lastPrice: 20 }
                  }
                  return item
            })
            setFilter(setData)
    }

    useEffect(()=>{
        handleFilterArr(filterTypes)
    }, [woodTypes])

    const handleShow = (index) =>{
        const newOpen = [...showArr]
        newOpen[index] = !newOpen[index]
        setShowArr(newOpen)
    }

    const handleWoodType = (val) => {
        dispatch(getWood(val))
    }

    const handleCheck = () =>{
        const anyChecked = checkRef.current.some((item)=> item?.checked)
        if(anyChecked === true){
            checkRef.current.forEach(element => {
                element.checked = false
            });
        }
    }

    const handlePrice = () => {
        startRef.current.value = null
        lastRef.current.value = null
    }

  return (
    <div className='h-auto bg-[#f2f2f2] relative z-8 p-10'>
        <div className='flex justify-between items-center'>
            <p className='text-2xl'>Filters</p>
            <p className='underline cursor-pointer' onClick={()=> {dispatch(clearAll()); handleCheck(); handlePrice()}}>Clear All</p>
        </div>
        <hr />
        {filter?.map((title, index)=>{
            return (
                <div key={index}>
                    <div className="py-5" onClick={()=> handleShow(index)}>
                    <div className='flex justify-between items-center w-full'>
                        <p>{title.filterName}</p>
                        <MdKeyboardArrowDown className="text-xl transition-all duration-300" style={{transform: `rotate(${showArr[index] ? '180' : '0'}deg)`}}/>
                    </div>
                    
                    </div>
                    {title.woodFilter && (<div style={{height: `${showArr[index] ? 'auto' : '0'}`}} className="overflow-hidden transition-all duration-300">
                        {title.woodFilter?.map((woodFilter, key)=>{
                            return <FilterCheckbox value={woodFilter} key={key} handle={handleWoodType} checkRef={el => checkRef.current[key] = el}/>
                        })}
                    </div>)}
                    {!title.woodFilter && (<div style={{height: `${showArr[index] ? 'auto' : '0'}`}} className="overflow-hidden transition-all duration-300">
                        <FilterPrice startPrice={title.startPrice} lastPrice={title.lastPrice} startRef={startRef} lastRef={lastRef}/>
                    </div>)}
                    <hr className={`${showArr[index] ? 'mt-6' : 'mt-0'}`}/>
                </div>
            )
        })}
    </div>
  )
}

export default Filters