// import ReactTable from "react-table";
import { useState } from "react";


// export default function PatientTable(props){
//         const data = [
//           {
//             ingredient: "Metoprolol succinat",
//             tradeName: 'METOPROLOLSUCCINA T 1A 95MG',
//             strength:'95 mg',
//             form:'RetTabl',
//             morning:1,
//             midday:0,
//             evening:0,
//             night: 0,
//             unit:'stück',
//             hints:'',
//             reason:'Herz/Blutdruck'
//           },
//           {
//             ingredient: "Ramipril",
//             tradeName: 'RAMIPRIL RATIOPHARM 5MG',
//             strength:'5 mg',
//             form:'Tabl',
//             morning:1,
//             midday:0,
//             evening:0,
//             night: 0,
//             unit:'stück',
//             hints:'',
//             reason:'Blutdruck'
//           },
//           {
//             ingredient: "Insulin aspart",
//             tradeName: 'NOVORAPID PENFILL ZYLINAMP',
//             strength:'100 E/ml',
//             form:'Amp',
//             morning:20,
//             midday:0,
//             evening:20,
//             night: 0,
//             unit:'IE',
//             hints:'Wechseln der Injektionsstellen, unmittelbar vor einer Mahlzeit spritzen',
//             reason:'Herz/Blutdruck'
//           },
//           {
//             ingredient: "Simvastatin",
//             tradeName: 'SIMVA ARISTO 40MG',
//             strength:'40 mg',
//             form:'Tabl',
//             morning:0,
//             midday:0,
//             evening:1,
//             night: 0,
//             unit:'stück',
//             hints:'',
//             reason:'Blutfette'
//           },
//         ];
//         const columns = [
//           {
//             Header: 'Wirkstoff',
//             accessor: 'ingredient'
//           },
//           {
//             Header: "Handelsname",
//             accessor: "tradeName",
//           },
//           {
//             Header: "Stärke",
//             accessor: "strength",
//           },
//           {
//             Header: 'Form',
//             accessor: 'form'
//           },
//           {
//             Header: "morgens",
//             accessor: "morning",
//           },
//           {
//             Header: "mit-tags",
//             accessor: "midday",
//           },
//           {
//             Header: 'abends',
//             accessor: 'evening'
//           },
//           {
//             Header: "zur Nacht",
//             accessor: "night",
//           },
//           {
//             Header: "Einheit",
//             accessor: "unit",
//           },
//           {
//             Header: "Hinweise",
//             accessor: "hints"
//           },
//           {
//             Header: "Grund",
//             accessor: "reason"
//           }
//         ];  
//            return (  
//           <div>  
//               <ReactTable  
//                   data={data}  
//                   columns={columns}  
//               />  
//           </div>        
//     )  

// }


 const data = [
   {
     medicinId: 0,
     ingredient: "Metoprolol succinat",
     tradeName: "METOPROLOLSUCCINA T 1A 95MG",
     strength: "95 mg",
     form: "RetTabl",
     morning: 1,
     midday: 0,
     evening: 0,
     night: 0,
     unit: "stück",
     hints: "",
     reason: "Herz/Blutdruck",
   },
   {
     medicinId: 1,
     ingredient: "Ramipril",
     tradeName: "RAMIPRIL RATIOPHARM 5MG",
     strength: "5 mg",
     form: "Tabl",
     morning: 1,
     midday: 0,
     evening: 0,
     night: 0,
     unit: "stück",
     hints: "",
     reason: "Blutdruck",
   },
   {
     medicinId: 2,
     ingredient: "Insulin aspart",
     tradeName: "NOVORAPID PENFILL ZYLINAMP",
     strength: "100 E/ml",
     form: "Amp",
     morning: 20,
     midday: 0,
     evening: 20,
     night: 0,
     unit: "IE",
     hints:
       "Wechseln der Injektionsstellen, unmittelbar vor einer Mahlzeit spritzen",
     reason: "Herz/Blutdruck",
   },
   {
     medicinId: 3,
     ingredient: "Simvastatin",
     tradeName: "SIMVA ARISTO 40MG",
     strength: "40 mg",
     form: "Tabl",
     morning: 0,
     midday: 0,
     evening: 1,
     night: 0,
     unit: "stück",
     hints: "",
     reason: "Blutfette",
   },
 ];

export default function PatientTable() {
  const [medicinData, setmedicinData] = useState(data);

  const onChange = (e, medicinId) => {
    const { name, value } = e.target;

    const editData = medicinData.map((item) =>
      item.medicinId === medicinId && name ? { ...item, [name]: value } : item
    );

    setmedicinData(editData);
  };

  return (
    <div className="patientTable">
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>ingredient</th>
              <th>tradeName</th>
              <th>strength</th>
              <th>form</th>
              <th>morning</th>
              <th>midday</th>
              <th>evening</th>
              <th>night</th>
              <th>unit</th>
              <th>hints</th>
              <th>reason</th>
            </tr>
          </thead>
          <tbody>
            {medicinData.map(
              ({
                medicinId,
                ingredient,
                tradeName,
                strength,
                form,
                morning,
                midday,
                evening,
                night,
                unit,
                hints,
                reason,
              }) => (
                <tr key={medicinId}>
                  <td>
                    <input
                      name="ingredient"
                      value={ingredient}
                      type="text"
                      onChange={(e) => onChange(e, medicinId)}
                      placeholder="Type ingredient"
                    />
                  </td>
                  <td>
                    <input
                      name="tradeName"
                      value={tradeName}
                      type="tradeName"
                      onChange={(e) => onChange(e, medicinId)}
                      placeholder="Type tradeName"
                    />
                  </td>
                  <td>
                    <input
                      name="strength"
                      type="text"
                      value={strength}
                      onChange={(e) => onChange(e, medicinId)}
                      placeholder="Type strength"
                    />
                  </td>
                  <td>
                    <input
                      name="form"
                      type="text"
                      value={form}
                      onChange={(e) => onChange(e, medicinId)}
                      placeholder="Type form"
                    />
                  </td>
                  <td>
                    <input
                      name="morning"
                      type="number"
                      value={morning}
                      onChange={(e) => onChange(e, medicinId)}
                      placeholder="Type morning"
                    />
                  </td>
                  <td>
                    <input
                      name="midday"
                      type="number"
                      value={midday}
                      onChange={(e) => onChange(e, medicinId)}
                      placeholder="Type midday"
                    />
                  </td>
                  <td>
                    <input
                      name="evening"
                      type="number"
                      value={evening}
                      onChange={(e) => onChange(e, medicinId)}
                      placeholder="Type evening"
                    />
                  </td>
                  <td>
                    <input
                      name="strennightgth"
                      type="number"
                      value={night}
                      onChange={(e) => onChange(e, medicinId)}
                      placeholder="Type night"
                    />
                  </td>
                  <td>
                    <input
                      name="unit"
                      type="text"
                      value={unit}
                      onChange={(e) => onChange(e, medicinId)}
                      placeholder="Type unit"
                    />
                  </td>
                  <td>
                    <input
                      name="hints"
                      type="text"
                      value={hints}
                      onChange={(e) => onChange(e, medicinId)}
                      placeholder="Type hints"
                    />
                  </td>
                  <td>
                    <input
                      name="reason"
                      type="text"
                      value={reason}
                      onChange={(e) => onChange(e, medicinId)}
                      placeholder="Type reason"
                    />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};


  
