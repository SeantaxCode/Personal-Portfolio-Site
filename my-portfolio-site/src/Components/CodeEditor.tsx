export default function CodeEditor(){
    return(
        <div className="CodeEditor">
            <ol>
                <li>{`<!DOCTYPE html>`}</li>
                <li>{`<html lang=en>`}</li>
                <li>{`<head>`}</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;{`<meta charset="utf-8">`}</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;{`<name="viewport" content="width=device-width, initial-scale=1.0">`}</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;{`<link rel="stylesheet" href="aboutme.css">`}</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;{`<title> My Portfolio Site </title>`}</li>
                <li>{`<head>`}</li>
            </ol>
        </div>
    )
}