import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import style from "./HoverMenyButton.module.scss";
import { useSelector } from "react-redux";
import {  Link } from "react-router-dom";

export default function CategoryDropdown({ title }) {
    const tables = useSelector((state) => state.tablesReducer.tables);
 

    let [isOverButton, setIsOverButton] = useState(false);
    let [isOverList, setIsOverList] = useState(false);
    let [isOpen, setIsOpen] = useState();
    let [isTouchInput, setIsTouchInput] = useState();
    let [hasClicked, setHasClicked] = useState();
    let button = useRef(null);

    useLayoutEffect(() => {
        if (isOpen && !isOverButton && !isOverList && !isTouchInput) {
            button.current.click();
            setIsOpen(false);
        } else if (!isOpen && (isOverButton || isOverList) && !isTouchInput) {
            button.current.click();
            setIsOpen(true);
        }
    }, [isOpen, isTouchInput,isOverButton, isOverList]);

    useEffect(() => {
        setIsTouchInput(false);
        setHasClicked(false);
    }, [hasClicked]);

    

    return (
        <div
            className={style.menu}
            onMouseEnter={(event) => {
                setIsOverButton(true);
            }}
            onMouseLeave={(event) => {
                setIsOverButton(false);
            }}>
            <button
                className={style.button}
                ref={button}
                onTouchStart={() => {
                    setIsTouchInput(true);
                }}
                onClick={() => {
                    setHasClicked(true);
                    setIsOpen(!isOpen);
                }}
                onKeyDown={() => {
                    setIsOpen(!isOpen);
                }}>
                {title}▾
            </button>
            <div
                className={isOverButton ? style.list : style.close}
                onMouseEnter={(event) => {
                    setIsOverList(true);
                }}
                onMouseLeave={(event) => {
                    setIsOverList(false);
                }}>
                {tables.map((table) => {
                    return (
                        <Link
                            key={table.id}
                            className={style.link}
                            to={`ManagementRestaurant/Table=${table.id}`}
                            onSelect={() => {
                                setIsOpen(false);
                            }}>
                            Table {table.id}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
