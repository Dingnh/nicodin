import React from "react"
import '../../App.css';

const Links = props => {
    let [isHovered, setHovered] = React.useState(false)

    const styles = {
        padding: {
            marginLeft: -50
        }
    }
    return (
        <div style={styles.padding}>
            <div className="linktitle" >{props.linktitle}</div>
            <div className="link">
                {props.links.map(link => <a
                    onMouseOver={() => setHovered(link)}
                    onMouseOut={() => setHovered()}
                    style={{ textDecoration: 'none', color: isHovered === link ? 'black' : 'grey' }}
                    href={link.linkdir}
                >{link.link}</a>)}
            </div>
        </div>
    )
}

export default Links