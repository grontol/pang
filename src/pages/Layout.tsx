import { css } from "@pang/css.js";
import { formatUrlPath, isActivePath } from "@pang/router.js";

export function Layout(props: { children?: JSX.Element }) {
    return <>
        <div>
            <nav>
                <a
                    href={formatUrlPath("")}
                    class={isActivePath("") ? "active" : ""}
                >Home</a>
                <a
                    href={formatUrlPath("about")}
                    class={isActivePath("about") ? "active" : ""}
                >About</a>
            </nav>
            <div id="content">
                {props.children}
            </div>
        </div>
        
        <style css={css`        
            nav {
                display: flex;
                background: #f3baba;
                align-items: center;
                justify-content: center;
            }
        
            a {
                display: inline-block;
                text-decoration: none;
                color: black;
                padding: 10px 12px;
            }
            
            a:hover {
                background: #da9898;
            }
            
            a.active {
                background: #b6b6f0;
            }
            
            #content {
                padding: 20px;
                background: #d4d0d0;
            }
        `}/>
    </>
}