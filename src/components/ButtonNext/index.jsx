import './styles.css'
import { useContext } from 'react';
import { FormContext } from '../../Context/formPesquisaContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ({ setMain }) {
    const {

        lojas,
        produtos,
        categoria,
        dataInicio,
        dataFinal,

    } = useContext(FormContext);


    //Flash alert para caso não preencha lojas
    function erroLojaVazia() {
        toast.warning('Preencha corretamente as lojas', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    };

    //Flash alert para caso não preencha corretamente produtos
    function erroProdutosVazia() {
        toast.warning('Preencha corretamente os produtos', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",

        })
    };

    //caso não preencha corretamente as categorias
    function erroCategoriasVazia() {
        toast.warning('Preencha corretamente as categorias', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",

        })
    };
    //caso não preencha corretamente os periodos
    function NotificacaoPeriodo() {
        toast.warning('Preencha corretamente o período', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    };

    

    function Verificar() {
        if (lojas.length === 0) {
            return erroLojaVazia();
        }
        else if (categoria === 0) {
            return erroCategoriasVazia()
        }
        else if (dataInicio === 0 || dataFinal == 0) {
            return NotificacaoPeriodo()
        }
        else if (dataFinal < dataInicio) {
            return NotificacaoPeriodo()
        }
        else if (produtos.length === 0) {
            return erroProdutosVazia()
        }
        else {
       

            setMain(false)
        }

    }
    return (
        <>
            <button  className='proxButton' onClick={() => Verificar()}>Proximo</button>
            <ToastContainer />
        </>
    )

}