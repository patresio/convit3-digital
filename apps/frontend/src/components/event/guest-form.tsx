import { Guest } from "core";
import InputField from "../shared/input-field";
import InputYesNo from "../shared/input-yes-no";


export interface GuestFormProps {
  guest: Partial<Guest>
  changeGuest: (guest: Partial<Guest>) => void
}

const GuestForm = (props: GuestFormProps) => {
  return (
    <div className="flex flex-col gap-5">
      <InputField
        label="Nome"
        value={props.guest.name ?? ''}
        onChange={e =>
          props.changeGuest({ ...props.guest, name: e.target.value })
        }
      />
      <InputField
        label="Email"
        value={props.guest.email ?? ''}
        onChange={e =>
          props.changeGuest({ ...props.guest, email: e.target.value })
        }
      />
      <div className="flex gap-5">
        <InputYesNo
          label="Presença Confirmada?"
          value={props.guest.confirmation ?? true}
          onChange={value =>
            props.changeGuest({
              ...props.guest,
              confirmation: value,
              hasCompanions: false,
              quantityCompanions: value ? 1 : 0
            })
          }
          className="flex-1"
        />
        {props.guest.confirmation && (
          <div className="flex-1 flex gap-5">
            <InputYesNo
              label="Possui acompanhantes?"
              value={props.guest.hasCompanions ?? false}
              onChange={value =>
                props.changeGuest({
                  ...props.guest,
                  hasCompanions: value,
                  quantityCompanions: value ? 1 : 0
                })
              }
              className="flex-1"
            />
            {props.guest.hasCompanions && (
              <InputField
                label="Quantidade de acompanhantes"
                type="number"
                value={props.guest.quantityCompanions ?? 1}
                onChange={e =>
                  props.changeGuest({
                    ...props.guest,
                    quantityCompanions: +e.target.value
                  })
                }
                min={1}
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
 
export default GuestForm;