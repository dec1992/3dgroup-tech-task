import { EStatuses } from "../stores/data.types"

interface IStatusSelectorProps {
  name: string
  value: EStatuses
  onChange: (name: string, status: EStatuses) => void
}

const iconLookup: Record<EStatuses, { icon: string, color: string }> = {
  [EStatuses.active]: {
    color: "icon is-small is-left has-text-success",
    icon: "fas fa-check-square"
  },
  [EStatuses.pendingReview]: {
    color: "icon is-small is-left has-text-warning",
    icon: "fas fa-exclamation-triangle"
  },
  [EStatuses.disabled]: {
    color: "icon is-small is-left has-text-danger",
    icon: "fas fa-ban"
  }
}

const StatusSelector: React.FC<IStatusSelectorProps> = ({ name, value, onChange }) => {
  const { color, icon } = iconLookup[value]
  return (<div className="control has-icons-left">
    <div className="select is-rounded has-icons-left"><select value={value} onChange={(e) => onChange(name, e.target.value as EStatuses)}>
      {(Object.keys(EStatuses) as Array<keyof typeof EStatuses>).map((key) => { return <option key={key} value={key}>{key}</option> })}
    </select>
    </div>
    <div className={color}>
      <i className={icon}></i>
    </div>
  </div>)
}

export default StatusSelector