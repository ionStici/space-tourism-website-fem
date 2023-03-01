import React, { useState } from 'react';
import styles from './Crew.module.scss';
import data from './../data.json';
import { NavLink, useParams } from 'react-router-dom';

import douglasPng from './../assets/crew/image-douglas-hurley.png';
import douglasWebp from './../assets/crew/image-douglas-hurley.webp';

import markPng from './../assets/crew/image-mark-shuttleworth.png';
import markWebp from './../assets/crew/image-mark-shuttleworth.webp';

import victorPng from './../assets/crew/image-victor-glover.png';
import victorWebp from './../assets/crew/image-victor-glover.webp';

import anoushehPng from './../assets/crew/image-anousheh-ansari.png';
import anoushehWebp from './../assets/crew/image-anousheh-ansari.webp';

const CrewMember = function (props) {
    return (
        <section className={styles.section}>
            <div className={styles.titleBox}>
                <div className={styles.title}></div>
            </div>

            <div className={styles.imgBox}>
                <picture>
                    <source />
                    <source />
                    <img className={styles.img} alt="Crew Member" />
                </picture>
            </div>

            <div className={styles.contentBox}>
                <h1 className={styles.role}>{props.role}</h1>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.bio}>{props.bio}</p>
                <div className={styles.circlesBox}>
                    {props.crewData[0].map(member => {
                        return (
                            <NavLink
                                className={styles.link}
                                key={member.role}
                                style={({ isActive }) => {
                                    if (isActive) return { opacity: '1' };
                                    if (
                                        window.location.pathname === '/crew' &&
                                        member.name
                                            .split(' ')[0]
                                            .toLowerCase() === 'douglas'
                                    )
                                        return { opacity: '1' };
                                }}
                                to={`/crew/${member.name
                                    .split(' ')[0]
                                    .toLowerCase()}`}
                            ></NavLink>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export const Crew = function () {
    const crewData = useState(data.crew);
    const douglas = useState({
        name: crewData[0][0].name,
        role: crewData[0][0].role,
        bio: crewData[0][0].bio,
    });
    const mark = useState({
        name: crewData[0][1].name,
        role: crewData[0][1].role,
        bio: crewData[0][1].bio,
    });
    const victor = useState({
        name: crewData[0][2].name,
        role: crewData[0][2].role,
        bio: crewData[0][2].bio,
    });
    const anousheh = useState({
        name: crewData[0][3].name,
        role: crewData[0][3].role,
        bio: crewData[0][3].bio,
    });

    const urlPar = useParams();
    const member = urlPar.member;

    if (member === mark[0].name.split(' ')[0].toLowerCase()) {
        return (
            <main className={styles.main}>
                <div className={styles.bg}></div>
                <CrewMember
                    crewData={crewData}
                    name={mark[0].name}
                    role={mark[0].role}
                    bio={mark[0].bio}
                    imgs={[markPng, markWebp]}
                />
            </main>
        );
    }

    if (member === victor[0].name.split(' ')[0].toLowerCase()) {
        return (
            <main className={styles.main}>
                <div className={styles.bg}></div>
                <CrewMember
                    crewData={crewData}
                    name={victor[0].name}
                    role={victor[0].role}
                    bio={victor[0].bio}
                    imgs={[victorPng, victorWebp]}
                />
            </main>
        );
    }

    if (member === anousheh[0].name.split(' ')[0].toLowerCase()) {
        return (
            <main className={styles.main}>
                <div className={styles.bg}></div>
                <CrewMember
                    crewData={crewData}
                    name={anousheh[0].name}
                    role={anousheh[0].role}
                    bio={anousheh[0].bio}
                    imgs={[anoushehPng, anoushehWebp]}
                />
            </main>
        );
    }

    return (
        <main className={styles.main}>
            <div className={styles.bg}></div>
            <CrewMember
                crewData={crewData}
                name={douglas[0].name}
                role={douglas[0].role}
                bio={douglas[0].bio}
                imgs={[douglasPng, douglasWebp]}
            />
        </main>
    );
};