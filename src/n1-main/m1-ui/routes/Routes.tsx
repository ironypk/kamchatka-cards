import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Test} from '../test/Test';

export enum PATH {
    LOGIN = '/login',
    REGISTRATION = '/registration',
    PROFILE = '/profile',
    PAGE_NOT_FOUND = '/404',
    RECOVER_PASSWORD = '/recover_password',
    CREATE_PASSWORD = '/create_password',
    TEST = '/test'

}

function Routes() {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <div>MAIN</div>}/>
                <Route path={PATH.LOGIN} render={() => <div>Login</div>}/>
                <Route path={PATH.REGISTRATION} render={() => <div>REGISTRATION</div>}/>
                <Route path={PATH.PROFILE} render={() => <div>PROFILE</div>}/>
                <Route path={PATH.RECOVER_PASSWORD} render={() => <div>RECOVER_PASSWORD</div>}/>
                <Route path={PATH.CREATE_PASSWORD} render={() => <div>CREATE_PASSWORD</div>}/>
                <Route path={PATH.TEST} render={() => <Test/>}/>

                <Route path={PATH.PAGE_NOT_FOUND} render={() => <div>page not found</div>}/>
                <Route path={'*'} render={() => <Redirect to={PATH.PAGE_NOT_FOUND}/>}/>
            </Switch>
        </div>
    )
}

export default Routes