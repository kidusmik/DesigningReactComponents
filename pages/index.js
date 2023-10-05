import { data } from "../SpeakerData"

const IndexPage = () => {

    // const {id,bio,first,last,favorite,twitterHandle,company,sessions,} = data[0];
    return (
        <div className="container speakers-list">
            <div className="row">

                {data.map(function (speaker){
                    const {id,bio,first,last,favorite,twitterHandle,company,sessions,} = speaker;

                return (
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
                    <div className="card card-height  p-4 mt-4">
                        <div className="speaker-img d-flex flex-row">
                            <img 
                                className="container-fit" 
                                src={`/images/speaker-${id}.jpg`} 
                                width="300" 
                                alt="{`${first} ${last}`}"
                            />
                        </div>

                        <div className="speaker-info">
                            <div className="d-flex">
                                <h3 className="text-truncate">
                                    {first} {last}
                                </h3>
                            </div>

                            <div>
                                <p> {bio} {company} {twitterHandle} {favorite} </p>
                            </div>
                        </div>

                        <div className="sessionBox">
                            <span className="session">
                                {sessions[0].title} <strong>Room: {sessions[0].room.name}</strong>
                            </span>
                        </div>
                    </div>

                </div>
                )
            })}
            </div>
        </div>
    )
};

export default IndexPage;