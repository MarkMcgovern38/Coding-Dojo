import SubContent from '../components/SubContent';
import Advertisement from '../components/Advertisement';
import style from '../css/MainContent.module.css'


const MainContent = ()=>{
    return(
        <div className={style.red}>
            <div className="flex">
                <SubContent />
                <SubContent />
                <SubContent />
            </div>
            <Advertisement />
        </div>
    )
}

export default MainContent