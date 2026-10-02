function StudentCard(props) {
  return (
        <div className={`rounded-xl p-5 shadow ${ props.note >= 10 ? "bg-green-600" : "bg-red-600"}`}>
          <h3 className="text-lg font-bold">
            {props.name}
          </h3>

          <p className="mt-2 text-slate-500">
            Note : {props.note} / 20
          </p>
        </div>
  )
}

export default StudentCard