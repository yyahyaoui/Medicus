import ReactTable from "react-table";


export default function PatientTable(props){
        const data = [
          {
            ingredient: "Metoprolol succinat",
            tradeName: 'METOPROLOLSUCCINA T 1A 95MG',
            strength:'95 mg',
            form:'RetTabl',
            morning:1,
            midday:0,
            evening:0,
            night: 0,
            unit:'stück',
            hints:'',
            reason:'Herz/Blutdruck'
          },
          {
            ingredient: "Ramipril",
            tradeName: 'RAMIPRIL RATIOPHARM 5MG',
            strength:'5 mg',
            form:'Tabl',
            morning:1,
            midday:0,
            evening:0,
            night: 0,
            unit:'stück',
            hints:'',
            reason:'Blutdruck'
          },
          {
            ingredient: "Insulin aspart",
            tradeName: 'NOVORAPID PENFILL ZYLINAMP',
            strength:'100 E/ml',
            form:'Amp',
            morning:20,
            midday:0,
            evening:20,
            night: 0,
            unit:'IE',
            hints:'Wechseln der Injektionsstellen, unmittelbar vor einer Mahlzeit spritzen',
            reason:'Herz/Blutdruck'
          },
          {
            ingredient: "Simvastatin",
            tradeName: 'SIMVA ARISTO 40MG',
            strength:'40 mg',
            form:'Tabl',
            morning:0,
            midday:0,
            evening:1,
            night: 0,
            unit:'stück',
            hints:'',
            reason:'Blutfette'
          },
        ];
        const columns = [
          {
            Header: 'Wirkstoff',
            accessor: 'ingredient'
          },
          {
            Header: "Handelsname",
            accessor: "tradeName",
          },
          {
            Header: "Stärke",
            accessor: "strength",
          },
          {
            Header: 'Form',
            accessor: 'form'
          },
          {
            Header: "morgens",
            accessor: "morning",
          },
          {
            Header: "mit-tags",
            accessor: "midday",
          },
          {
            Header: 'abends',
            accessor: 'evening'
          },
          {
            Header: "zur Nacht",
            accessor: "night",
          },
          {
            Header: "Einheit",
            accessor: "unit",
          },
          {
            Header: "Hinweise",
            accessor: "hints"
          },
          {
            Header: "Grund",
            accessor: "reason"
          }
        ];  
           return (  
          <div>  
              <ReactTable  
                  data={data}  
                  columns={columns}  
              />  
          </div>        
    )  

}


  
