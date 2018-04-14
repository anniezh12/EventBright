class EventsController < ApplicationController

      def index
        @events= Event.all
              # respond_to do |format|
              #     format.json {render json:@events}
              # end

       end

        def create
        
          @event= Event.new(event_params)
          if @event.save
            render json: @event
              # respond_to do |format|
              #     format.json {render json:@events}
              # end
            end
         end

         private
          def event_params
            params.require(:event).permit(:name,:city,:date)
          end

end
