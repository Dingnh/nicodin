import React from "react"
import '../../App.css';

const Links = props => {

    const styles = {
        links: {
            textDecoration: "none",
            color: "black"
        },
        padding: {
            marginLeft: -50
        }
    }

    return (
        <div style={styles.padding}>
            <div className="linktitle" >{props.linktitle}</div>
            <div className="link">
                {props.links.map(link => <a style={styles.links} href={link.linkdir} >{link.link}</a>)}
            </div>
        </div>
    )
}

export default Links