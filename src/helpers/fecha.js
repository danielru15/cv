export const obtenerFecha = (startDate,endDate ) => {
    const startMonthYear = new Date(startDate).toLocaleString('default', {year:"numeric",  month: 'short' })
    const endMonthYear = endDate ? new Date(endDate).toLocaleString('default', {year:"numeric", month: 'short' }) :  "Actual" 
    const yearMonth = `${startMonthYear}  - ${endMonthYear}`
    
    return  yearMonth  
}

