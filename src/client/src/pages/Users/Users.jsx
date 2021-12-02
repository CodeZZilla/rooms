import {useEffect, useState} from "react";
import axios from "axios";
import {BarWave} from "react-cssfx-loading";
import ActionTable from "../../components/ActionTable/ActionTable";
import Container from "../../hoc/container/Container";
import UserService from "../../services/user.service";

export default function Users() {

    const [isLoading, setIsLoading] = useState(true);
    const [dataUser, setDataUser] = useState([]);



    useEffect(() => {
        UserService.getUsers().then(response => {
            let u = [];
            for (let i = 0; i < response.data.length; i++) {
                u.push({
                    id: response.data[i].id,
                    idTelegram: response.data[i].idTelegram,
                    surname: response.data[i].lastName,
                    name: response.data[i].name,
                    lessDays: response.data[i].daysOfSubscription,
                    date: response.data[i].creationDate,
                    rooms: response.data[i].todayCompilation.length,
                    stage: response.data[i].userStatus
                })
            }
            setDataUser(u)
            setIsLoading(false)
        })

    }, [])

    const deleteUsers = async (id) => {
        await UserService.deleteUser(id);
    }

    const addHandlerButton = (e, value) => {

    }

    return (

        isLoading ? <BarWave className="loaderBar"/> :
            <div className="page-heading">
                <div className="page-title">
                    <div className="row">
                        <div className="col-12 col-md-6 order-md-1 order-last">
                            <h3>Таблиця даних</h3>
                            <p className="text-subtitle text-muted"/>
                        </div>

                    </div>
                </div>
                <section className="section">
                    <div className="card">
                        <div className="card-body">
                            <ActionTable title="Таблиця" data={dataUser} options={{selection: true}} action={[
                                {
                                    tooltip: 'Видалити всіх вибраних юзерів',
                                    icon: 'delete',
                                    onClick: async (evt, selectedUsers) => {
                                        await deleteUsers(selectedUsers.map(x => x.id))
                                        let newUsers = []
                                        Array.from(dataUser).map(item => {
                                            let findUser = selectedUsers.find(el => el === item)
                                            if (findUser === undefined) {
                                                newUsers.push(item)
                                            }
                                        })
                                        setDataUser(newUsers)
                                    }
                                },
                                {
                                    tooltip: '',
                                    icon: 'add',
                                    onClick: (evt, value) => {addHandlerButton(evt, value)}
                                }
                            ]}/>
                        </div>
                    </div>
                </section>
            </div>




    )
}