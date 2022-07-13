import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import headerLogo from '../../assets/images/images2.png'
import {
    Button,
    Modal,
    Form,
    FormGroup,
    Label,
    Input,
    ModalHeader,
    ModalFooter,
    ModalBody
} from 'reactstrap';
import Swal from 'sweetalert2'
import { UserContext } from '../../App';

const Header = (props) => {
    console.log(props)
    let items = props.cart

    const [store, setStore] = useContext(UserContext)
    const [showModal, setShowModal] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault(true)
        console.log("Submit", email, password)
        fetch("http://localhost:8080/sign-in")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data) {
                    const isUser = data.filter(su => su.email === email && su.password === password)
                    if (isUser.length) {
                        Swal.fire({
                            icon: 'success',
                            title: "Successfully Logged in!",
                            text: "Done!",
                        })

                        setStore({ ...store, user: data[0] })
                    }
                    else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Your are not an user, please register first!',
                            footer: '<Link href="/signUp">Go to register page</Link>'
                        })
                    }

                    // history.replace("/home");
                }
            })

    }

    return (
        <header>
            <section id="title">
                {/* <!-- Nav Bar --> */}
                <nav className="main-nav">
                    <div style={{ width: "300px", height: "150px" }}>

                        <Link to="/"><img className="logo" src={headerLogo} alt=""
                            style={{ width: "300px", height: "150px" }} /></Link>
                    </div>
                    <ul>
                        <li className="home"><Link to="/home">Home</Link> |{" "}</li>
                        <li className="categories"><a>categories</a>
                            <div className="submenue" id="submenue">
                                <ul>
                                    <li><Link to={`/categories/${'Capsules'}`}>Capsule</Link></li>
                                    <li><Link to={`/categories/${'Tablets'}`}>Tablet</Link></li>
                                    <li><Link to={`/categories/${'Syrups'}`}>Syrup</Link></li>
                                    <li><Link to={`/categories/${'Vitamins'}`}>Vitamines</Link></li>
                                    <li><Link to={`/categories/${'Ointments'}`}>Ointment</Link></li>
                                    <li><Link to={`/categories/${'Calciums'}`}>Calcium</Link></li>

                                </ul>
                            </div>
                        </li>
                        <li className="account"><Link to="/account">Account <br /> {store.user?.name}</Link></li>
                        <li className="contact"><Link to="/contact">Contact Us</Link></li>
                        <li><Link to={`/cart`}>cart: {items.length}</Link></li>
                        <li></li>
                    </ul>
                    <div className="login-join-button row align-items-center mr-5">
                        <div className="col-5">
                            {/* <!-- Login Button With Login Form Modal -->
            <!-- Button trigger modal --> */}
                            <Button
                                color="light"
                                className="btn btn-sm nav-btn btn-light"
                                onClick={() => setShowModal(!showModal)}
                            >
                                Login
                            </Button>

                            {/* <!-- Modal --> */}
                            <Modal
                                isOpen={showModal}
                                centered
                                toggle={() => setShowModal(!showModal)}
                            >
                                <ModalHeader toggle={() => setShowModal(!showModal)}>
                                    Registration!
                                </ModalHeader>
                                <ModalBody>
                                    <Form onSubmit={handleSubmit} inline>
                                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                            <Label
                                                className="me-sm-2"
                                                for="exampleEmail"
                                            >
                                                Email
                                            </Label>
                                            <Input
                                                id="exampleEmail"
                                                name="email"
                                                placeholder="something@idk.cool"
                                                type="email"
                                                required
                                                onChange={(event) => setEmail(event.target.value)}
                                            />
                                        </FormGroup>
                                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                            <Label
                                                className="me-sm-2"
                                                for="examplePassword"
                                            >
                                                Password
                                            </Label>
                                            <Input
                                                id="examplePassword"
                                                name="password"
                                                placeholder="Enter password!"
                                                type="password"
                                                required
                                                onChange={(event) => setPassword(event.target.value)}
                                            />
                                        </FormGroup>
                                        <Button type="submit" color="success" className="mt-2">
                                            Sign up
                                        </Button>
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" onClick={() => setShowModal(!showModal)}>
                                        Cancel
                                    </Button>
                                </ModalFooter>
                            </Modal>
                            {/* </div>
                            } */}
                        </div>
                        <div className="col-5">
                            {/* <!-- Join Button as anchor (sends to sign up page) --> */}
                            <Link to="/signUp"><button type="button" className="btn btn-sm btn-light nav-btn">Sign Up</button></Link>
                        </div>
                    </div>
                </nav>
            </section>
        </header>
    )
}

export default Header